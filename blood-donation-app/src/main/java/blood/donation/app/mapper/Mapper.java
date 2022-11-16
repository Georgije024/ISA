package blood.donation.app.mapper;

import java.util.List;

public interface Mapper<T,U> {

    U entityToDto(T entity);
    List<U> entityListToDtoList(List<T> entities);
    T dtoToEntity(U dto);
    List<T> dtoListToEntityList(List<U> dtos);
}
